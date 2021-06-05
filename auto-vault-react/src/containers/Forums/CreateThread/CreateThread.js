import React, { Component, Fragment } from 'react';
import { convertToRaw, convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';
import thunk from 'redux-thunk';

class CreateThread extends Component {
  state = {
    description: '',
    title: '',
    category: '',
    result: '',
  };
  onDescriptionChangeHandler = (value) => {
    this.setState({ description: value });
  };

  onTitleChangeHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  onCategoryChangeHandler = (event) => {
    this.setState({ category: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const newPost = {
      title: this.state.title,
      category: this.state.category,
      description: convertToRaw(this.state.description.getCurrentContent()),
      userId: localStorage.getItem('userId'),
    };
    axios
      .post('http://localhost:5000/thread/createthread', newPost, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        console.log(res.data.createdThread.description);
        this.setState({
          result: stateToHTML(
            convertFromRaw(res.data.createdThread.description)
          ),
        });
      })

      .catch((err) => console.log('ERROR:', err));
  };

  render() {
    const uploadCallback = (file) => {
      const formData = new FormData();
      formData.append('file', file);
      return new Promise((resolve, reject) => {
        fetch('http://localhost:5000/uploadImage', {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.json())
          .then((resData) => {
            console.log(resData);
            resolve({ data: { link: resData } });
          })
          .catch((error) => {
            console.log(error);
            reject(error.toString());
          });
      });
    };
    return (
      <Fragment>
        <form style={{ width: '50%', margin: 'auto' }} onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label for='exampleInputEmail1'>Thread Title</label>
            <input
              type='text'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              value={this.state.title}
              onChange={this.onTitleChangeHandler}
            />
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Thread Category</label>
            <select
              className='custom-select'
              value={this.state.category}
              onChange={this.onCategoryChangeHandler}
            >
              <option selected>Open this select menu</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div className='form-group'>
            <label for='exampleInputPassword1'>Thread Description</label>
            <Editor
              editorState={this.state.description}
              toolbarClassName='toolbarClassName'
              wrapperClassName='wrapperClassName'
              editorClassName='editorClassName'
              onEditorStateChange={this.onDescriptionChangeHandler}
              toolbar={{ image: { uploadCallback } }}
            />
            ;
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        <div dangerouslySetInnerHTML={{ __html: this.state.result }} />
      </Fragment>
    );
  }
}

export default CreateThread;
