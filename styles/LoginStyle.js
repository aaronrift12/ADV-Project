import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    marginTop: 250, // Add more margin at the top to position the content lower
    backgroundColor: '#f5f5f5', // Add a background color to the card view
    borderRadius: 8, // Add border radius to create rounded corners
    elevation: 3, // Add elevation for a shadow effect (Android only)
    shadowColor: '#000', // Add shadow color (iOS only)
    shadowOffset: { width: 0, height: 2 }, // Add shadow offset (iOS only)
    shadowOpacity: 0.3, // Add shadow opacity (iOS only)
    shadowRadius: 4, // Add shadow radius (iOS only)
  },
  input: {
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 5, // Add some bottom margin to create space between inputs
    width: 250, // Adjust the width of the input text box
  },
  inputGroup: {
    marginBottom: 10, // Add some bottom margin to create space between input group and button
  },
  button: {
    alignItems: 'center',
    alignSelf: 'center', // Center the button horizontally
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'skyblue',
    width: 250, // Set the width of the button to match the input text box
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  bottomContainer: {
    justifyContent: 'flex-end', // Align content at the bottom
  },
});

export default styles;