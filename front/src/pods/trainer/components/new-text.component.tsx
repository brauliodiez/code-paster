import React from 'react';
import * as classes from './new-text.styles';
// Material UI ~ components
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface Props {
  trainerText: string;
  setTrainerText: (text: string) => void;
  handleAppendTrainerText: () => void;
  newTextValue: string;
  setNewTextValue: (text: string) => void;
}

export const NewTextComponent: React.FC<Props> = props => {
  const {
    setTrainerText,
    trainerText,
    handleAppendTrainerText,
    newTextValue,
    setNewTextValue,
  } = props;
  const { newTextContainer, labelTextarea, editTextArea, sendBtn } = classes;

  return (
    <div className={newTextContainer}>
      <label className={labelTextarea} htmlFor="new-text">
        New text
      </label>
      <TextareaAutosize
        id="new-text"
        rowsMax={10}
        rowsMin={10}
        className={editTextArea}
        onBlur={e => setTrainerText(e.target.value)}
        onChange={e => setNewTextValue(e.target.value)}
        value={newTextValue}
      />
      <Button
        variant="contained"
        color="primary"
        className={sendBtn}
        onClick={() => handleAppendTrainerText()}
      >
        Send
      </Button>
    </div>
  );
};