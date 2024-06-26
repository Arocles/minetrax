export function useFormKit() {
    const generateSchemaFromFieldsArray = (fields, forViewOnly = false) => {
        const generated = fields.map((field) => {
            let f = {
                $formkit: field.type == 'multiselect' ? 'select' : field.type,
                label: field.label,
                name:
                    field.name ?? field.label.toLowerCase().replace(/ /g, '_'),
                help: field.help ?? undefined,
                validation: field.validation ?? undefined,
                placeholder: field.placeholder ?? undefined,
                multiple: field.type == 'multiselect' ? true : undefined,
                value: field.value ?? undefined,
            };

            if (
                field.type === 'select' ||
                field.type === 'multiselect' ||
                field.type === 'radio'
            ) {
                f.options = field.options?.split(',') ?? [];
            }

            if (forViewOnly && field.type === 'text' && field.value?.length > 100) {
                f.$formkit = 'textarea';
            }

            return f;
        });
        return generated;
    };

    return {
        generateSchemaFromFieldsArray,
    };
}
