import React from 'react';
import FaturasService from "./faturasService";
import { Row, Col, Card, Alert } from "react-bootstrap";

class FaturasComponent extends React.Component {
    constructor(props) {
      super(props);

      this._faturasService = new FaturasService();

      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    async componentDidMount() {
      try {
        const response = await this._faturasService.Get();
        this.setState({
            items: response.items,
            isLoaded: true
        });
      } catch (error) {
          this.setState({
            error,
            isLoaded: true
          });
      }
    }

    render() {
      const { error, isLoaded, items } = this.state;
      
      if (!isLoaded) {
        return (
          <Row>
            <Col>
              Carregando suas faturas...
            </Col>
          </Row>
        )
      }
      
      if (error) {
        return (
          <Row>
            <Col>
              <Alert variant="danger" className="bg-white">
                <Alert.Heading>Erro ao carregar faturas</Alert.Heading>
                <p>Não conseguimos carregar suas faturas neste momento. Que tal tentar mais tarde?</p>
              </Alert>
            </Col>
          </Row>
        )
      }

      return (
        <div className="faturasComponent">
          <Row className="flex-nowrap overflow-auto">
            {items.map((item, id) => {
              const paymentAvailable = !(item.status.code === 2 || item.status.code === 4);
              const badgeColor = this._faturasService.GetStatusColorByCode(item.status.code);
              const dueDate = this._faturasService.GetDueDateString(item.dueDate);

              item.reference = this._faturasService.GetReferenceName(item.reference);
              item.consumedBand = this._faturasService.GetConsumeBandString(item.consumedBand);

              return (
                <Col key={id} xs="11" md="5" lg="3" className="d-flex pt-3 pb-3">
                  <Card border="0" className="col">
                    <Card.Body>
                      <div>
                        <span className="h4 mr-1">Fatura</span>
                        <span className="text-muted text-uppercase">{item.reference}</span>
                        <span className={`badge badge-${badgeColor} float-right font-weight-light`}>{item.status.name}</span>
                      </div>
                      <div className="mt-5 mb-5">
                        <div className="consumed-band" title={item.consumedBand}>
                          {item.consumedBand}
                          <small className="h6 text-muted text-uppercase">mb</small>
                        </div>

                        <div className="price mb-5">
                          <small className="h6 text-muted mr-1">{item.cost.currency}</small>
                          <span className="h4 text-danger">{item.cost.value}</span>
                        </div>

                        <div className="due-date">
                          <div className="text-muted text-uppercase">Vencimento</div>
                          <div>
                            <span className="h4 mr-1">{dueDate.date}</span>
                            <small>{dueDate.weekDay}</small>
                          </div>

                        </div>
                      </div>
                      <div hidden={!paymentAvailable}>
                        <a className="float-right text-success text-uppercase">Efetuar Pagamento</a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </div>
      )
    }  
  
  }

export default FaturasComponent