import React from "react";
import { IssuesList } from "./styles";

export function IssuesRepo({ issues }) {
  return (
    <IssuesList>
      {issues.map(issue => (
        <li key={String(issue.id)}>
          <img src={issue.user.avatar_url} alt={issue.user.login}/>
          <div>
            <strong>
              <a href={issue.html_url}>{issue.title}</a>
              {issue.labels.map(label => (
                <span key={String(label.id)}>{label.name}</span>
              ))}
            </strong>
            <p>{issue.user.login}</p>
          </div>
        </li>
      ))}
    </IssuesList>
  )
}