import React from 'react'
import './Modal.css'


export default class Modal extends React.Component {
    state = {
        isOpen: false 
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})} className='modal__open'>Open modal</button>

                {this.state.isOpen && (
                    <div className='modal'>
                            <div className="modal__body">
                            <h1>Modal Title</h1>
                            <p className='modal__text'> I am awesome modal!</p>
                            <button className='modal__close' onClick={() => this.setState({isOpen: false})}>Close modal</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}