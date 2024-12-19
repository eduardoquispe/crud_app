import React from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { CustomDialogProps as Props } from './dialog-confirm.types';


const DialogConfirm: React.FC<Props> = (props) => {
  const { visible, title, content, confirmText = 'Ok' } = props;
  const { onDismiss, onCancel, onConfirm, cancelText = 'Cancelar' } = props;

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">{content}</Text>
        </Dialog.Content>
        <Dialog.Actions>
          {onCancel && (
            <Button onPress={onCancel}>
              {cancelText}
            </Button>
          )}
          {onConfirm && (
            <Button onPress={onConfirm}>
              {confirmText}
            </Button>
          )}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogConfirm;
