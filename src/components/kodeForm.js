import React from "react";
import "./kodeForm.css";

export default function KodeForm() {
    return (
        <div className="kotak">
        <div className="judul">
      <h1>Create Playlist</h1>
        </div>
        <div form>
            <div className="form-group">
              <label for="title">Title</label> <br></br>
              <input type="text" id="title" />
            </div>
            <div className="form-group">
              <label for="desc">Description</label><br></br>
              <input type="text" id="desc" /> <br><br></br></br>
            </div>
            <div className="form-group">
              <button className="submit">Create</button>
            </div>
        </div>
      </div>
             
    );
}