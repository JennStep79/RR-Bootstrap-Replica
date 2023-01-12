import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Stores() {
    return (
        <div style={{ margin: "auto" }}>
        <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>Browse stores in Houston</h2>
<Container style={{ marginTop: "50px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
        <Row>
            <Col xs=".5" >
                <Image style={{height: "55px", width: "50px", border: "1px solid #E8E9EB"}} src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5">
                <Image style= {{height: "50px", width: "50px", border: "1px solid #E8E9EB" }}src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                <p>Delivery * Pickup</p>
            </Col>
        </Row>
        <Col sm="1"></Col>
        <Row >
            <Col xs=".5" >
                <Image style= {{height: "50px", width: "50px", border: "1px solid #E8E9EB"}}src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/252/9921fd46-e9b5-4a9c-8598-dea54d037e3d.png" roundedCircle />
            </Col>
            <Col>
                <h5 style={{ fontWeight: "bold" }}>Smith's</h5>
                <p>Delivery</p>
            </Col>
        </Row>
    </Row>
</Container>
</div>
    )
}

export default Stores