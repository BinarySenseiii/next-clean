import { Fragment } from 'react'
import {
	type Control,
	type ControllerRenderProps,
	type FieldPath,
	type FieldValues,
} from 'react-hook-form'
import { match } from 'ts-pattern'

import { RenderPasswordRequirements } from '../constant/validations'

import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './design-system/form'
import { Input } from './design-system/input'

export enum FORM_FIELD {
	INPUT = 'input',
	PASSWORD = 'password',
	TEXTAREA = 'textarea',
	PHONE_INPUT = 'phoneInput',
	CHECKBOX = 'checkbox',
	DATE_PICKER = 'datePicker',
	SELECT = 'select',
	SKELETON = 'skeleton',
}

interface CustomFieldProps<
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
> {
	control: Control<TFieldValues>
	name: TName
	fieldType: FORM_FIELD
	placeholder: string
	label?: string
	withPasswordRequirement?: boolean
}

const RenderInput = <
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
>({
	fieldType,
	placeholder,
	field,
	withPasswordRequirement,
}: CustomFieldProps<TFieldValues, TName> & {
	field: ControllerRenderProps<TFieldValues, TName>
}) => {
	return match(fieldType)
		.with(FORM_FIELD.INPUT, () => (
			<FormControl>
				<Input placeholder={placeholder} {...field} />
			</FormControl>
		))
		.with(FORM_FIELD.PASSWORD, () => (
			<FormControl>
				<Fragment>
					<Input type="password" placeholder={placeholder} {...field} />
					{withPasswordRequirement && (
						<RenderPasswordRequirements password={field.value} />
					)}
				</Fragment>
			</FormControl>
		))
		.otherwise(() => 'Invalid Input')
}

const CustomField = <
	TFieldValues extends FieldValues,
	TName extends FieldPath<TFieldValues>,
>(
	props: CustomFieldProps<TFieldValues, TName>,
) => {
	return (
		<FormField
			control={props.control}
			name={props.name}
			render={({ field }) => (
				<FormItem className="flex-1">
					{props.fieldType !== FORM_FIELD.CHECKBOX && props.label && (
						<FormLabel>{props.label}</FormLabel>
					)}
					<RenderInput field={field} {...props} />
					<FormMessage className="text-[13px]" />
				</FormItem>
			)}
		/>
	)
}

export default CustomField
