import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: '',
        activeTab: 'Photos',
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        setQuery(state, action) {
            const payload = typeof action.payload === 'string' ? action.payload.trim() : ''
            state.query = payload
        },
        setActiveTab(state, action) {
            state.activeTab = action.payload
        },
        setResults(state, action) {
            state.results = action.payload
            state.loading = false
        },
        setLoading(state, action) {
            state.loading = true
            state.error = null
        },
        setError(state, action) {
            state.error = action.payload
            state.loading = false
        },
        clearInterval(state) {
            state.results = []
            state.loading = false
            state.error = null
        }
    }
})

export const { setQuery, setLoading, setActiveTab, setResults, setError, clearInterval } = searchSlice.actions
export default searchSlice.reducer