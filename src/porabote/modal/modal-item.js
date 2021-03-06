import React, { Component } from 'react'
import { connect } from 'react-redux'

class ModalItem extends Component {

    render() {

        return (
            <div className="modal-tabs-block active">
                <div className="modal-box">

                    <div className="modal-box-up">
                        <span>{this.props.data.title}</span>
                    </div>

                    <div className="modal-box-center">
                        {React.cloneElement(this.props.data.content, {
                            itemkey: this.props.itemkey,
                            removeModalItem: this.props.removeModalItem
                        })}

                    </div>

                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        removeModalItem: (tabKey) => dispatch({
            type: 'REMOVE_MODAL_ITEM',
            payload: {
                tabKey
            }
        }),
    }
}
export default connect(null, mapDispatchToProps)(ModalItem)