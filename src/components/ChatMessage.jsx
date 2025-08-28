import React from 'react';
export default function ChatMessage({ role, content, onCopy }) {
  return (
    <div className={`msg ${role}`}>
      <div className="avatar">{role === 'assistant' ? '🤖' : '🧑'}</div>
      <div className="bubble">
        <pre style={{ whiteSpace: 'pre-wrap' }}>{content}</pre>
        <div className="row">
          <button className="ghost" onClick={() => onCopy(content)}>Salin</button>
        </div>
      </div>
    </div>
  );
}