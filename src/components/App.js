import React, {useState} from "react";
import ListItem from "./ListItem";
import "./../styles/App.css";

function App() {
	const [items, setItems] = useState([]);
	const [newitem, setnewItem] =  useState("");
	const addItem = () => {
		items.push(newitem);
		setItems([...items]);
		setnewItem("")
	};
	const newic = (evt) => {
		setnewItem(evt.target.value);
	};

	const onEdit = (editvalue, itemidx) => {
		items[itemidx] = editvalue;
		setItems([...items]); 
	}

	const onDelete = (itemidx) => {
		items.splice(itemidx, 1)
		setItems([...items]); 
	}

	return (
	<div id="main">
	<textarea id="task" onChange={newic} placeholder="New Item" value={newitem}></textarea>
	<buttton id="btn" onClick={addItem} disabled={newitem.trim().length === 0}>
		AddItem
		</buttton>
	{items.map((item, idx) => (
			<ListItem item={item} key={`${item}_${idx}`} 

			idx={idx } onEdit={onEdit} onDelete={onDelete} />
		))}
	</div>
	); 
}


export default App;
