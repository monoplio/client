import { useMutation, gql } from '@apollo/client'

const MORTGAGE_PROPERTY = gql`
  mutation($propertyId: ID!){
    mortgageProperty(propertyId: $propertyId){
      id
    }
  }
`

const useMortgagePropertyMutation = (options) => useMutation(MORTGAGE_PROPERTY, options)
export { useMortgagePropertyMutation, MORTGAGE_PROPERTY }
