export function selectedTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}