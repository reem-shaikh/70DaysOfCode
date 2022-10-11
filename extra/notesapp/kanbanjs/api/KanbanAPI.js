//contains all the code for the local storage components 
export default class KanbanAPI {
    //getting items inside the column 
	static getItems(columnId) {
        //get reference to the column that the user is trying to recieve
		const column = read().find(column => column.id == columnId);

		if (!column) {
			return [];
		}

		return column.items;
	}

    //inserting item in the columnn 
	static insertItem(columnId, content) {
        //read data from local storage 
		const data = read();
		const column = data.find(column => column.id == columnId);
        //in real world we will be generating id on the serverside 
		const item = {
            //generating random id
			id: Math.floor(Math.random() * 100000),
			content
		};

		if (!column) {
			throw new Error("Column does not exist.");
		}
        //add new item to bottom of the array items[]
		column.items.push(item);
		save(data);

		return item;
	}

    //newProps contains information to update itemID
	static updateItem(itemId, newProps) {
        //getting a reference to the data through read 
		const data = read();
        //get reference to the item your trying to update 
        //were doing array destructuring 
		const [item, currentColumn] = (() => {
            //for column object inside the data array 
			for (const column of data) {
                //were retreiving the item
                //if the item selected by the user is the same as the item.id it will then be stired inside the constant item 
				const item = column.items.find(item => item.id == itemId);

				if (item) {
					return [item, column];
				}
			}
		})();

        console.log(item, curentColumn)

        //if no item found 
		if (!item) {
			throw new Error("Item not found.");
		}

		item.content = newProps.content === undefined ? item.content : newProps.content;

		// Update column and position
		if (
			newProps.columnId !== undefined
			&& newProps.position !== undefined
		) {
			const targetColumn = data.find(column => column.id == newProps.columnId);

			if (!targetColumn) {
				throw new Error("Target column not found.");
			}

			// Delete the item from it's current column
			currentColumn.items.splice(currentColumn.items.indexOf(item), 1);

			// Move item into it's new column and position
			targetColumn.items.splice(newProps.position, 0, item);
		}

		save(data);
	}

	static deleteItem(itemId) {
		const data = read();

		for (const column of data) {
			const item = column.items.find(item => item.id == itemId);

			if (item) {
				column.items.splice(column.items.indexOf(item), 1);
			}
		}

		save(data);
	}
}

//read from local storage directly 
function read() {
	const json = localStorage.getItem("kanban-data");

    //if this is the first time user is loading the kanban board, we'll return these objects
	if (!json) {
		return [
			{
				id: 1,
				items: []
			},
			{
				id: 2,
				items: []
			},
			{
				id: 3,
				items: []
			},
		];
	}

    //convert JSON string to JS object 
	return JSON.parse(json);
}

function save(data) {
	localStorage.setItem("kanban-data", JSON.stringify(data));
}
    //to save in local storage you need to convert JS object to JSON string