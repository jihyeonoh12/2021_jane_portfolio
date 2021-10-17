import React from 'react'
import '../styles/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="flex-mobile align-item">
                    <a href="#">Digital Design</a>
                    <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    <a href="#">Print Design</a>
                    <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                    <a href="#">Coding</a>
                </div>
                <div className="flex-mobile align-item">
                     <a href="#">Resume</a>
                     <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                     <h4>© 2019 by Jane Noh</h4>
                </div>
            </div>

        )
    }
}

export default Footer