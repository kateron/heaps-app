import React, { Component } from 'react';
import './App.css';

class AddHarvestForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label for="name-input">Name</label>
                    <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter plant name" />
                </div>
                <div className="form-group">
                    <label for="name-input">Description</label>
                    <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter plant description" />
                </div>

                <div className="form-group">
                    <label for="name-input">Location/Pick up</label>
                    <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter pick up location" />
                </div>

                <div className="form-group">
                    <label for="name-input">Photo</label>
                    <input type="text" className="form-control" name="photo-input" id="photo-input" value="plant.jpg" />
                </div>

                <div className="form-group">
                    <label for="type-input">Type</label>
                    <select className="form-control" name="type-input" id="type-input">
                        <option value="1">Fruit</option>
                        <option value="2">Veges</option>
                        <option value="3">Herbs</option>
                        <option value="4">Flowers</option>
                        <option value="5">Misc</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        )
    }
}

export default AddHarvestForm;