import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    core.setOutput('release-url','https://sbstnjmnz.com')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
