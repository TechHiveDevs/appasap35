
import { 
  Edit,
  SimpleForm,
  
TextInput,
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditOrder(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="title" variant="outlined"   />
<NumberInput source="items" variant="outlined"  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}