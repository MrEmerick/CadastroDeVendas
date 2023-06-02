import { useState } from 'react'
import { FlatList, ScrollView} from 'react-native'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TransactionExpenses } from '../../components/TransactionExpenses'
import { Container, Transactions } from './styles'
import { EmployesDTO } from '../../storage/EmployesDTO'



export function Dashboard() {
  const [cpf, setCPF] = useState('')
  const [region, setRegion] = useState('')
  const [sale, setSale] = useState('')
  const [product, setProduct] = useState('')
  const [sales, setSales] = useState<EmployesDTO[]>([])
  
  
  function handleAddNewEmploye() {
    if ( cpf.toUpperCase() != '11111111111' && cpf.toUpperCase() != '22222222222' && cpf.toUpperCase() != '33333333333'){
      return alert('Cpf Invalido')
    }
    if ( region != 'Norte' && region != 'Sul' && region != 'Sudeste' && region != 'Nordeste'){
      return alert('Região Inválida')
    }
    
    const data = {
      id: String(new Date().getTime()),
      cpf,
      region,
      product,
      sale: parseFloat(sale)
    }
    // const Cpfs = [
    //   { id: '1', cpf: '11111111111' },
    //   { id: '2', cpf: '22222222222' },
    //   { id: '3', cpf: '33333333333' },
      
    // ]
    

    setSales([...sales, data])
    setCPF('')
    setRegion('')
    setProduct('')
    setSale('')
  }
  function totals(){
    console.log(sales)
    const countries = ['norte','sul','nordeste','sudeste']
    countries.forEach(country => {
      const totalCountry = sales
      .filter(data => data.region.toLowerCase() === country)
      .reduce((total, obj) => total += obj.sale, 0)
      console.log(totalCountry)
    })
  }

  return (
    <Container
    >
      <Header title='Cadastro de Vendas' />
      
      <Input
        placeholder='CPF'
        placeholderTextColor='#363F5F'
        value={cpf}
        onChangeText={value => setCPF(value)}
      />
      <Input
        placeholder='Regiao'
        placeholderTextColor='#363F5F'
        value={region}
        onChangeText={value => setRegion(value)}
      />

      <Input
        placeholder='Produto'
        placeholderTextColor='#363F5F'
        value={product}
        onChangeText={value => setProduct(value)}
      />

      <Input
        placeholder='Valor da Venda'
        placeholderTextColor='#363F5F'
        value={sale}
        onChangeText={value => setSale(value)}
      />
      
      <Button
        title='Adicionar'
        onPress={handleAddNewEmploye}
      />
      
      <Transactions>
        <FlatList
          data={sales}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TransactionExpenses
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </Transactions>
      <Button
        title='Totais'
        onPress={totals}
      />
      
    </Container>
  )
}

