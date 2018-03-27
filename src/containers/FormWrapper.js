import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Form1 from './Form1';
import Form2 from './Form2';



class FormWrapper extends Component {

    state = {
        page: 1
    };

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

    nextPage = () => {
        console.log('next');
        this.setState({ page: this.state.page + 1 })
    }

    previousPage = () => {
        console.log('prev');
        this.setState({ page: this.state.page - 1 })
    }

    render() {

        const { onSubmit } = this.props;
        const { page } = this.state;

        return (
            <div>
                {this.state.page}

                {page === 1 && <Form1 onSubmit={this.nextPage} />}
                {page === 2 && (
                    <Form2
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />
                )}



            </div>
        )
    }

}

function validate(values) {
    const errors = {};
    return errors;

}

export default reduxForm({
    validate,
    form: 'FormWrapper'
})(FormWrapper);