import React from 'react';
import { Gitgraph, templateExtend, TemplateName } from "@gitgraph/react";

export { FFMergeBefore , FFMergeAfter, MergeBefore, MergeAfter }


const gitGraphTemplate = templateExtend(TemplateName.Metro, {
    commit: {
      message: {
        displayAuthor: false,
        displayHash: false
      }
    }
  })

function setupBranches(gitgraph){
    const main = gitgraph.branch("main");
    main.commit("an inital commit")
    main.commit("another commit")
    main.commit("yet another commit")
    const another_branch = main.branch("some_branch")
    another_branch.commit("start doing something")
    another_branch.commit("finish it up")
    return [main, another_branch]
}

function MergeBefore() {
      return (
              <Gitgraph options={{template: gitGraphTemplate}}>
                {(gitgraph) => {
                    const [main, branch] = setupBranches(gitgraph);
                    main.commit("main advances")
                }}
          </Gitgraph>
      );
}

function MergeAfter() {
      return (
              <Gitgraph options={{template: gitGraphTemplate}}>
                {(gitgraph) => {
                    const [main, branch] = setupBranches(gitgraph);
                    main.commit("main advances")
                    main.merge(branch);
                }}
          </Gitgraph>
      );
}

function FFMergeBefore() {
      return (
              <Gitgraph options={{template: gitGraphTemplate}}>
                {(gitgraph) => { 
                    const [main, _] = setupBranches(gitgraph);
                }}
          </Gitgraph>
      );
}

function FFMergeAfter() {
      return (
              <Gitgraph options={{template: gitGraphTemplate}}>
                {(gitgraph) => { 

                    const [main, branch] = setupBranches(gitgraph);
                    main.merge({branch: branch, fastForward: true});
                }}
          </Gitgraph>
      );

}
