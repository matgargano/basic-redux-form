import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';



class Form2 extends Component {
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

    onSubmit = (values) => {
        console.log(values);

    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    name="name"
                    label="Name"
                    component={this.renderField}
                />
                <button onClick={this.props.previousPage} className="btn btn-primary">Prev</button>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        )
    }

}

function validate(values) {
    const errors = {};
    return errors;

}

export default reduxForm({
    validate,
    form: 'FormWrapper',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(Form2);