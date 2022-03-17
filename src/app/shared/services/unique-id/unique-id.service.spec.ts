import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {

    let service: UniqueIdService = null

    beforeEach(() => {
        service = new UniqueIdService() // Criando nova instancia do uniqueId antes de rodar cada it
    })
    
    it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should generate id when called with prefix`, () => {
        const id = service.generateIdWithPrefix('stn')
        expect(id.startsWith('stn-')).toBeTrue()
    })

    it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should not generate duplicate id when called multiple times`, () => {
        const ids = new Set() //Set não aceita elementos duplicados, ignorando a adição caso já tenha este item armazenado
        const QTY_IDS_TO_GENERATE = 50
        for (let index = 0; index < QTY_IDS_TO_GENERATE; index++) {
            ids.add(service.generateIdWithPrefix('stn')) // Adicionando 50 IDs no set
        }
        expect(ids.size).toBe(QTY_IDS_TO_GENERATE)
    })

    it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueId} should return the number of the generated Ids when called`, () => {
        const QTY_IDS_TO_GENERATE = 20
        const ids = new Set()
        for (let index = 0; index < QTY_IDS_TO_GENERATE; index++) {
            ids.add(service.generateIdWithPrefix("stn"))
        }
        expect(service.getNumberOfGenerateUniqueId()).toBe(QTY_IDS_TO_GENERATE)
    })

    it(`${UniqueIdService.prototype.generateIdWithPrefix.name} should throw when called empty` ,() => {
        // Quando for testar exceções é necessario chamar este método dentro de uma funcao
        const empetyValues = [null, undefined, '', '213', '0']
        empetyValues.forEach(emptyValue => {
            expect(_ => service.generateIdWithPrefix(emptyValue)).toThrow()
        });
    })

    //Adicionando contexto em cada it para diferencia-los
    it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should throw when called empty`, () => {
        const empetyValues = [null, undefined, '', '213', '0']
        empetyValues.forEach(emptyValue => {
            expect(_ => 
                service.generateIdWithPrefix(emptyValue))
                .withContext(`Empty value: ${emptyValue}`)
                .toThrow()
        });
    })

    //Tipos de validação de booleano
    it(`#${UniqueIdService.prototype.generateIdWithPrefix.name} should generate id started with prefix when called with prefix`, () => {
        const id = service.generateIdWithPrefix('stn')
        expect(id.startsWith('stn-')).toBeTrue() 

        expect(true).toBeTrue() // So valida tipos primitivos, true ou false literal
        expect(true).toBe(true) // Compara se são 2 elementos iguais, mesma referencia e tipo
        expect(1).toBeTruthy() // O mais generico de todos, valida de acordo com as regras do JS
    }) 


})