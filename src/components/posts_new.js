import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
	renderField(field) {
		// console.log(field.meta);
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input} //like so = onChange={field.input.onChange}, onFocus={field.input.onFocus}, onBlur={field.input.onBlur}, name="somename" all in object in input
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values){
		// this === component
		// console.log('onSubmit: ', values);
		this.props.createPost(values, () => {
			this.props.history.push('/'); //call back
		});
	}

	render() {
		const { handleSubmit } = this.props;
		// console.log(this.props); ===> propertie 
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
			 <Field
			 	label="Title For Post"
			 	name="title"
			 	component={this.renderField}
			 />	
			 <Field
			 	label="Categories"
			 	name="categories"
			 	component={this.renderField}
			 />
			 <Field
			 	label="Post Content"
			 	name="content"
			 	component={this.renderField}
			 />

			 <button type="submit" className="btn btn-primary">Submit</button>
			 <Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}


function validate(values) {
	// console.log(values) -> { title: 'fdsfd', categories: 'fdsfdsf', content: 'fsfdsf'}
	// console.log('validate: ', values);
	const errors = {};

	//Validate the inputs from 'values'
	// if(values.title.length < 3){
	// 	errors.title = 'Title must be at least 3 characters';
	// }
	if(!values.title){
		errors.title = 'Enter a title!';
	}
	if(!values.categories){
		errors.categories = 'Enter some categories';
	}
	if(!values.content){
		errors.content = 'Enter some content please';
	}

	// If errors is empty, the form is fine to submit
	// If errors has *any* properties, redux form assumes form is invalid
	// console.log('errors: ', errors);
	return errors;

}


export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null, { createPost })(PostsNew)
);






