import React, { useState } from "react";
import "./../styles/App.css";

function ListItem(props) {
  const [editedI, setedit] = useState(props.item);
  const [editm, seteditm] = useState(false);
  const editic = (evt) => {
    setedit(evt.target.value);
  };
  const saveedit = () => {
    props.onEdit(editedI, props.idx);

    seteditm(false);
  };

  return (
    <div className="list">
      {editm ? (
        <>
          <textarea
            className="editTask"
            onChange={editic}
            placeholder="Edit task"
            value={editedI}
          ></textarea>
          <button
            className="saveTask"
            onClick={saveedit}
            disabled={editedI.trim().length === 0}
          >
            Save Task
          </button>
        </>
      ) : (
        <>
          
          {props.item}
          <button className="edit" onClick={() => seteditm(true)}>
            edit
          </button>
          <button className="delete" onClick={() => props.onDelete(props.idx)}>
            delete
          </button>
        </>
      )}
    </div>
  ); 
}

export default ListItem;
