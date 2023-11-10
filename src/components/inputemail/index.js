import {useForm, Controller} from 'react-hook-form';
import {TextInput, StyleSheet} from 'react-native';

const InputEmail = ({control, ...props}) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
        validate: true,
      }}
      render={({field: {onChange, value}}) => (
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={onChange}
          placeholder="Email"
        />
      )}
      name="email"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 8,
  },
});

export default InputEmail;
