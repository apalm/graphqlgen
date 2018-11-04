import { join } from 'path'
import { buildTypesMap } from '../../introspection/index'

const relative = (p: string) => join(__dirname, p)
const language = 'typescript'

describe('typescript file introspection', () => {
  test('find all types in file', () => {
    const typesNames = Object.keys(
      buildTypesMap(relative('./mocks/types.ts'), language),
    )

    expect(typesNames).toEqual([
      'Interface',
      'Type',
      'ExportedInterface',
      'ExportedType',
    ])
  })

  // TODO: Update test
  // test('extract fields from typescript type', () => {
  //   const model: Model = { modelTypeName: 'Interface', absoluteFilePath: relative('./mocks/types.ts'), importPathRelativeToOutput: 'not_used' }
  //   const fields = extractFieldsFromTypescriptType(model)
  //
  //   expect(fields).toEqual([
  //     { fieldName: 'field', fieldOptional: false },
  //     { fieldName: 'optionalField', fieldOptional: true },
  //     { fieldName: 'fieldUnionNull', fieldOptional: true },
  //   ])
  // })
})
