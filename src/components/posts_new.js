import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	renderTitleField(field) {
		// console.log(field.input);
		return (
			<div className="form-group">
				<label>Title</label>
				<input
					className="form-group"
					type="text"
					// {field.input}
				/>
			</div>
		);
	}

	// renderTagsField(field) {

	// }

	render() {
		return (
			<form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
				
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew);