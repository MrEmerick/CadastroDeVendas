import { EmployesDTO } from "../../storage/EmployesDTO";
import { comission } from "../../util/calculate";
import {
  Container,
  Cabec,
  Name,
  Occupation,
  Footer,
  FooterData,
  Amount,
} from "./styles";

type Props = {
  data: EmployesDTO
}


export function TransactionExpenses({ data }: Props) {
  return (
    <Container>
      <Cabec>CPF</Cabec>
      <Name>{data.cpf}</Name>

      <Footer>
        <Cabec>Região</Cabec>
        <Cabec>Valor da Venda</Cabec>
      </Footer>

      <FooterData>
      <Name>{data.region}</Name>
        <Amount>R$ {data.sale}</Amount>
      </FooterData>
      <Footer>
        <Cabec>Produto</Cabec>
        <Cabec>Comissão</Cabec>
      </Footer>
      <FooterData>
      <Name>{data.product}</Name>
        <Amount>R$ {comission(data.sale)}</Amount>
      </FooterData>
       {/* <Footer>
        
        <Cabec>IRF</Cabec>
      </Footer>

      <FooterData>
        <Amount>R$ {inss(data.sale)}  </Amount>
        <Amount>R$ {irf(data.sale)}</Amount>
      </FooterData>  */}
 
      {/* <Footer>
        <Cabec>Vale Transporte</Cabec>
        <Cabec>Salario Liquido</Cabec>
      </Footer>

      <FooterData>
        <Amount>R$ {transportationVouchers(data.sale)}  </Amount>
        <Amount>R$  {salaryReceived(data.sale)} </Amount>
      </FooterData>  */}

    </Container>
  )
}
