import React from 'react';
import { useHistory } from 'react-router';

export const ReturnButton = ({color, margin}) => {
  const history = useHistory();
  return (
      <p className="Return-Button Light-Text Cursor-Pointer" style={{color, margin}} onClick={() => history.goBack()}>Return to Professional Work &#x2192;</p>
  )
}