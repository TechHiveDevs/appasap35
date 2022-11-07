
import { 
  Create,
  SimpleForm,
  
TextInput,
NumberInput,
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateOrder(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="title" variant="outlined"   />
<NumberInput source="items" variant="outlined"  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
