export interface ProjectInquiryPayload {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  service?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  description?: string;
  goals?: string;
  blueprint?: Record<string, any> | null;
  source?: string;
}

export interface InquiryValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  description?: string;
}

/**
 * Validates project inquiry form input fields on the client side.
 */
export function validateInquiryFields(
  data: Partial<ProjectInquiryPayload>,
  options: { requireDescription?: boolean } = { requireDescription: true }
): InquiryValidationErrors {
  const errors: InquiryValidationErrors = {};

  // Full Name validation
  if (!data.fullName || !data.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  }

  // Business Email validation
  if (!data.email || !data.email.trim()) {
    errors.email = 'Business email is required.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Please enter a valid business email address.';
    }
  }

  // Phone Number validation
  if (!data.phone || !data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else {
    const cleanedPhone = data.phone.trim().replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^[+]?[0-9]{7,15}$/;
    if (!phoneRegex.test(cleanedPhone)) {
      errors.phone = 'Please enter a valid phone number (e.g., +91 82371 22316).';
    }
  }

  // Description / Goals validation
  if (options.requireDescription) {
    if (!data.description || !data.description.trim()) {
      errors.description = 'Project description is required.';
    } else if (data.description.trim().length < 10) {
      errors.description = 'Please provide a bit more detail (at least 10 characters).';
    }
  }

  return errors;
}

/**
 * Reusable submit handler that sends the complete form data
 * as a JSON POST request to /api/project-inquiry
 */
export async function submitProjectInquiry(
  payload: ProjectInquiryPayload
): Promise<{ success: boolean; message: string; inquiryId?: string }> {
  try {
    const response = await fetch('/api/project-inquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
      }),
    });

    if (!response.ok) {
      let serverErrorMessage = `Request failed with status ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          serverErrorMessage = errorData.message;
        }
      } catch {
        // Fallback if response is not JSON
      }
      throw new Error(serverErrorMessage);
    }

    const data = await response.json().catch(() => ({ success: true, message: 'Inquiry received successfully.' }));
    return {
      success: true,
      message: data.message || 'Your inquiry was submitted successfully.',
      inquiryId: data.inquiryId || `INQ-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
    };
  } catch (error: any) {
    console.warn('Project inquiry submission notice:', error.message || error);
    // Rethrow or return structured error response
    throw new Error(
      error.message || 'Unable to connect to the project inquiry service. Please check your connection or contact us directly.'
    );
  }
}
