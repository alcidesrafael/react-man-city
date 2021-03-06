import React from 'react';

const FormField = ({id, formdata, change}) => {

    const showError = () => {
        let errorMessage = <div className="error_label">
            {
                formdata.validation && !formdata.valid ?
                    formdata.validationMessage
                :null
            }
        </div>
        return errorMessage;
    }

    const renderTemplate = () => {
        let formTemplate = null;

        switch(formdata.element){
            case('input'):
                return formTemplate = (
                    <div>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event)=>change({event, id})}
                        />
                        {showError()}
                    </div>
                )
            default:
                formTemplate = null;
        }
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    )
}

export default FormField;