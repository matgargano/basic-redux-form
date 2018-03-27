import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';



class Form1 extends Component {


    renderField = (field) => {
        const { meta } = field;

        const error = meta.touched && meta.error;
        let errorMsg = '';
        let formClasses = ['form-group'];
        if (error) {
            errorMsg = (<small className="text-help">
                {meta.error}
            </small>);
            formClasses.push('has-danger');

        }



        return (

            <div className={formClasses.join(' ')}>
                <label>{field.label}</label>

                <input
                    className="form-control"
                    type="text"
                    {...field.input}

                />
                {errorMsg}
            </div>
        );
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}>



                <Field
                    name="title"
                    label="Title"
                    component={this.renderField}
                />

                <Field
                    name="categories"
                    label="Categories"
                    component={this.renderField}
                />
                <Field
                    name="content"
                    label="Post Content"
                    component={this.renderField}
                />
                <button type="submit" className="next">
                    Next
                </button>
            </form>
        )
    }

}

function validate(values) {
    console.log(values);
    const errors = {};
    errors.content = 'dafsdf';
    return errors;

}

export default reduxForm({
    validate,
    form: 'FormWrapper',
    destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true, 
})(Form1);