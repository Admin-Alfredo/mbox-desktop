#
@{callbacks}
 OnClickHeader(e: Event)

### @Property
`isOpen`
  - type: `Boolean`
  - descrition: `Responsavel por mostrar ou esconder os item da lista`

 labelHeader: String
 dataItems: ArrayList<T>
 renderItem: Function<ReactElement>(item: <T>)//renderiza os item na tela
renderHeader: Function<ReactElement>()// renderiza um header personalizado 
  
 