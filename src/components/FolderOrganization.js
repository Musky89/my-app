import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './FolderOrganization.css';

const FolderOrganization = ({ initialFolders }) => {
  const [folders, setFolders] = useState(initialFolders);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newFolders = Array.from(folders);
    const [reorderedFolder] = newFolders.splice(result.source.index, 1);
    newFolders.splice(result.destination.index, 0, reorderedFolder);

    setFolders(newFolders);
  };

  return (
    <div className="folder-organization">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="folders">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {folders.map((folder, index) => (
                <Draggable key={folder.id} draggableId={folder.id} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {folder.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default FolderOrganization;
