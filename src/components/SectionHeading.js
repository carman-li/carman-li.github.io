import React from 'react';

import { Row } from 'react-bootstrap';

function SectionHeading(props) {
    return (
        <Row>
            <div className="sectionHeading">{props.content}</div>
        </Row>
    )
}
export default SectionHeading;