import {
  type Control,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { match } from 'ts-pattern'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './design-system/form'
import { Input } from './design-system/input'

export enum FORM_FIELD {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

type CustomFormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>
  name: TName
  fieldType: FORM_FIELD
  placeholder: string
  label?: string
}

const RenderInput = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  fieldType,
  placeholder,
  field,
}: {
  fieldType: FORM_FIELD
  placeholder: string
  field: ControllerRenderProps<TFieldValues, TName>
}) => {
  return match(fieldType)
    .with(FORM_FIELD.INPUT, () => (
      <FormControl>
        <Input placeholder={placeholder} {...field} />
      </FormControl>
    ))
    .otherwise(() => 'Invalid Input')
}

const CustomFormField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  fieldType,
  placeholder,
  label,
}: CustomFormFieldProps<TFieldValues, TName>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldType !== FORM_FIELD.CHECKBOX && label && <FormLabel>{label}</FormLabel>}
          <RenderInput field={field} fieldType={fieldType} placeholder={placeholder} />
          <FormMessage className='text-sm' />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField
