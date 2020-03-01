import React, { Component } from 'react';

export default class AdditionalUpload extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        return (
            <form>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        
                        <img src={url} alt="..." style={{height:'7rem', width:'7rem'}} />
                
                    ))}
                </div>

                <div className="form-group">
                    <label for="upload-input" className="form-control">Selektuj slike</label>
                    <input type="file" style={{display:'none'}} id="upload-input" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <button type="button"  className="btn btn-danger btn-block" onClick={this.uploadFiles}>Učitaj</button>
            </form >
        )
    }
}