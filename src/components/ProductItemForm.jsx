import { useState } from "react";

function ProductItemForm() {

    const [item, setItemData] = useState({ print: '' });
    const setItemPrint = (e) => {
        const print = e.target.value;
        setItemData({print})
    }

    return (  
        <form onSubmit={() => console.log('done')}>
            <div>
                <input type="radio" id="print1" name="print" value="4+0" />
                <label htmlFor="print1">Друк 4+0</label>

                <input type="radio" id="print2" name="print" value="4+4" />
                <label htmlFor="print2">Друк 4+4</label>
            </div>
            <button type="submit">Замовити</button>
        </form>
    );
}

export default ProductItemForm;