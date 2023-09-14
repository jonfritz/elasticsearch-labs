import { Sources } from './sources'
import { ChatMessageType, SourceType } from 'types'
import ReactMarkdown from 'react-markdown'
import React from 'react'

interface AnswerMessageProps {
  text: ChatMessageType['content']
  sources: ChatMessageType['sources']
  onSourceClick: (source: SourceType) => void
}

export const AnswerMessage: React.FC<AnswerMessageProps> = ({
  text,
  sources,
  onSourceClick,
}) => {
  return (
    <div className="mb-4">
      <div className="flex flex-row justify-between mb-8">
        <div className="flex flex-row justify-center align-middle items-center">
          <div className="flex flex-col justify-start">
            <h2 className="text-zinc-700 text-2xl font-bold leading-9">
              Answer
            </h2>
            <p className="text-zinc-400 text-sm font-medium">
              Powered by <b>Elasticsearch</b> with <b>Azure OpenAI</b>
            </p>
          </div>
        </div>
      </div>

      {text && <ReactMarkdown skipHtml>{text}</ReactMarkdown>}
      {sources && (
        <Sources
          showDisclaimer
          sources={sources}
          onSourceClick={onSourceClick}
        />
      )}
    </div>
  )
}
