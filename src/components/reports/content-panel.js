import React from 'react'
import ReportAddForm from './report-add-form'
import { connect } from 'react-redux'

class ContentPanel extends React.Component {

    render() {

        return(
            <div>
                <span
                    onClick={() => {
                        this.props.pushModalItem(this.props.dicts);
                    }}
                    className="content__tools_panel__item plus"
                            >
                    Добавить
                </span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pushModalItem: (dicts) => dispatch({
            type: 'PUSH_MODAL_ITEM',
            payload: {
                title: 'Создать отчет',
                content: React.createElement(ReportAddForm, {dicts: dicts})
            }
        }),
    }
}
export default connect(null, mapDispatchToProps)(ContentPanel)