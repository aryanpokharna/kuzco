'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { BookOpen, Search, User, Calendar, Tag } from 'lucide-react';

export default function ConfluenceInterface() {
  const { state, dispatch } = useApp();
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDocClick = (docId: string) => {
    setSelectedDoc(docId);
    const doc = state.confluenceDocs.find(d => d.id === docId);
    dispatch({
      type: 'ADD_CONSOLE_LOG',
      payload: {
        id: Date.now().toString(),
        message: `Retrieved documentation: ${doc?.title}`,
        level: 'success',
        timestamp: new Date()
      }
    });
  };

  const filteredDocs = state.confluenceDocs.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedDocData = selectedDoc ? state.confluenceDocs.find(d => d.id === selectedDoc) : null;

  return (
    <div className="h-full bg-white flex">
      {/* Document List */}
      <div className="w-1/2 border-r border-gray-200 flex flex-col">
        <div className="p-3 border-b border-gray-200 bg-blue-50">
          <h3 className="font-semibold text-gray-800 flex items-center mb-2">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Base
          </h3>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documentation..."
              className="w-full pl-10 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              onClick={() => handleDocClick(doc.id)}
              className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                selectedDoc === doc.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-sm text-gray-900 line-clamp-2">
                  {doc.title}
                </h4>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full ml-2 flex-shrink-0">
                  {doc.category}
                </span>
              </div>
              <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                {doc.content}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{doc.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{doc.lastModified.toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-2">
                {doc.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded flex items-center"
                  >
                    <Tag className="w-2 h-2 mr-1" />
                    {tag}
                  </span>
                ))}
                {doc.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                    +{doc.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Content */}
      <div className="w-1/2 flex flex-col">
        {selectedDocData ? (
          <>
            <div className="p-3 border-b border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-2">{selectedDocData.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{selectedDocData.author}</span>
                  </div>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {selectedDocData.category}
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{selectedDocData.lastModified.toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="flex-1 p-3 overflow-y-auto">
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Content</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {selectedDocData.content}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-2">Tags</h4>
                <div className="flex flex-wrap gap-1">
                  {selectedDocData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded flex items-center"
                    >
                      <Tag className="w-2 h-2 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>Select a document to view</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
