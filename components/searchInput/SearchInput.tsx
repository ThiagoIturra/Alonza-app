import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (text: string) => void;
  onFilterChange?: (filter: 'title' | 'price') => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search',
  onSearch,
  onFilterChange,
}) => {
  const [searchText, setSearchText] = React.useState('');
  const [activeFilter, setActiveFilter] = React.useState<'title' | 'price'>('title');

  const handleInputChange = (text: string) => {
    setSearchText(text);
    if (onSearch) {
      onSearch(text);
    }
  };

  const handleFilterPress = (filter: 'title' | 'price') => {
    setActiveFilter(filter);
    if (onFilterChange) {
      onFilterChange(filter);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="search" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#000"
          value={searchText}
          onChangeText={handleInputChange}
        />
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'title' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => handleFilterPress('title')}
        >
          <Text
            style={[
              styles.filterText,
              activeFilter === 'title' ? styles.activeText : styles.inactiveText,
            ]}
          >
            Nome
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === 'price' ? styles.activeButton : styles.inactiveButton,
          ]}
          onPress={() => handleFilterPress('price')}
        >
          <Text
            style={[
              styles.filterText,
              activeFilter === 'price' ? styles.activeText : styles.inactiveText,
            ]}
          >
            Preço
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    height: 130,
    backgroundColor: '#e03b39',
    paddingTop: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    marginTop: 20,
  },
  filterButton: {
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 1,
    borderWidth: 1,
  },
  activeButton: {
    backgroundColor: '#fff',
    borderColor: '#fff',
  },
  inactiveButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  filterText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  activeText: {
    color: '#000',
  },
  inactiveText: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 40,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
});

export default SearchInput;
