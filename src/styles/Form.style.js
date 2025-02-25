import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 2.5rem;
  width: 340px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.backgroundLight};
  transition: all 0.3s ease;
  font-size: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.backgroundLight};
  transition: all 0.3s ease;
  font-size: 1rem;
  height: 120px;
  resize: vertical;
  line-height: 1.4;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const FormMessage = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.error};
`;

export const FormMessageSuccess = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
  font-weight: bold;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.success};
  display: inline-block;
  width: fit-content;
  margin: 10px auto;
  box-shadow: 0 4px 8px rgba(0, 128, 0, 0.2);
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
`;
