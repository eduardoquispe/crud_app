/**
 * CustomDialogProps interface.
 * @interface CustomDialogProps
 * @since 1.0.0
 */
export interface CustomDialogProps {
  /** Visible prop. */
  visible: boolean;

  /** Title of the dialog. */
  title: string;

  /** Content of the dialog. */
  content: string;

  /** Icon of the dialog. */
  icon?: string;

  /** Handles the dismiss of the dialog. */
  onDismiss: () => void;

  /** Handles the cancel of the dialog. */
  onCancel?: () => void;

  /** Handles the confirm of the dialog. */
  onConfirm?: () => void;

  /** Text of the cancel button. */
  cancelText?: string;

  /** Text of the confirm button. */
  confirmText?: string;
}
