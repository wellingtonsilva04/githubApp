import { filtrosSelectors } from "../busca/selectors";
import { compare } from "../../utils/list";
export const repoSelector = (state) => state.reposReducer.repos;


sortByStar= (a,b) => compare(a.stargazers_count,b.stargazers_count);
sortByForks = (a,b) => compare(a.forks_count, b.forks_count);
sortByIssues = (a,b) => compare(a.open_issues_count,b.open_issues_count);

export const repoFilterSelector = state => {
    const repos = repoSelector(state);
    let filtros = filtrosSelectors(state);

 const filtedList = repos.filter(
        item => (
            item.stargazers_count >= filtros.numStar && item.forks_count >= filtros.numFork && item.open_issues_count >= filtros.numIssue)
            )

    if (filtros.orderStar){
        return filtedList.sort(sortByStar)
    }
    if (filtros.orderFork){
        return filtedList.sort(sortByForks)
    }
    if (filtros.orderIssue){
        return filtedList.sort(sortByIssues)
    }
}