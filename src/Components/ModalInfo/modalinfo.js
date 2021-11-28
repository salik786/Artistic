import { useState } from "react";
const ModalInfo = (props) => {
    const [open, setOpen] = useState(props)
    console.log(open.props)
    const ClickHanlder = () => {
        setOpen("none");
    }
    return (
        <div class="modal" tabindex="-1" role="dialog" style={{ display: `${open.props}!important` }}>
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={ClickHanlder}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalInfo;